"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Link from "next/link";
import { API_URL } from "@/lib/api";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  isFeatured: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

export default function CreatePostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      title: "",
      description: "",
      isFeatured: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    if (!image) {
      toast.error("Please upload a cover image");
      return;
    }

    setLoading(true);

    try {
      // UPLOAD THE IMAGE
      const imageFormData = new FormData();
      imageFormData.append("files", image);

      const uploadRes = await fetch(`${API_URL}/upload`, {
        method: "POST",
        body: imageFormData,
      });

      if (!uploadRes.ok) {
        throw new Error("Image upload failed");
      }

      const uploadData = await uploadRes.json();
      const uploadedFileId = uploadData[0].id;

      // CREATE THE POST WITH THE IMAGE ID ---
      const postPayload = {
        data: {
          title: data.title,
          description: data.description,
          isFeatured: data.isFeatured,
          slug: data.title.toLowerCase().trim().replace(/\s+/g, "-"),
          image: uploadedFileId,
        },
      };

      const postRes = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postPayload),
      });

      const postResult = await postRes.json();

      if (!postRes.ok) {
        console.error("Create Post Error:", postResult.error);
        toast.error(postResult.error.message);
        return;
      }

      toast.success("Post published successfully!");
      reset();
      setImage(null);
      router.refresh();
      router.push("/");
    } catch (error) {
      console.error("Workflow Error:", error);
      toast.error("Process failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#141729] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex ietms-center justify-between mb-10">
          <h2 className="text-4xl font-bold">Create New Post</h2>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-highlighted font-semibold text-base hover:gap-3 transition-all"
          >
            <span className="text-lg">←</span>
            Back to Feed
          </Link>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-[#1c2136] p-8 rounded-3xl border border-white/5 shadow-2xl"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Title
            </label>
            <input
              {...register("title")}
              className="w-full bg-[#141729] border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-highlighted outline-none"
              placeholder="e.g. Modern Villa in Dhaka"
            />
            {errors.title && (
              <p className="text-red-400 text-xs mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Cover Image
            </label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-highlighted file:text-brand-bg hover:file:bg-white cursor-pointer"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Description
            </label>
            <textarea
              {...register("description")}
              rows={5}
              className="w-full bg-[#141729] border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-highlighted outline-none resize-none"
            />
            {errors.description && (
              <p className="text-red-400 text-xs mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Featured Post */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              {...register("isFeatured")}
              className="w-5 h-5 accent-highlighted"
            />
            <label className="text-gray-300">Mark as Featured Property</label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-highlighted text-brand-bg font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform disabled:opacity-50"
          >
            {loading ? "Publishing..." : "Publish Post"}
          </button>
        </form>
      </div>
    </main>
  );
}
