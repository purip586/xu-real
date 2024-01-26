"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import PropertyRegForm from "@/components/PropertyRegForm";

const RegisterProperty = () => {
  const router = useRouter();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ });

  const registerProperty = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/property/registerProperty", {
        method: "POST",
        body: JSON.stringify({
          id: post.id,
          photos: post.photos,
          coverPhoto: post.coverPhoto,
          category: post.category,
          buildStatus: post.buildStatus,
          propertyName: post.propertyName,
          price: post.price,
          location: post.location,
          commute1: post.commute1,
          commute2: post.commute2,
          rooms: post.rooms,
          baths: post.baths,
          parking: post.parking,
          size: post.size,
          landArea: post.landArea,
          builtYear: post.builtYear,
          builtOf: post.builtOf,
          amenities: post.amenities,
        })
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PropertyRegForm
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={registerProperty}
    />
  );
};

export default RegisterProperty;
