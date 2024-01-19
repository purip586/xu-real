"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import PropertyRegForm from "@/components/PropertyRegForm";

const RegisterProperty = () => {
  const router = useRouter();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ coverPhoto: "", propertyName: "", price: "", location: "", });

  const registerProperty = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/property/new", {
        method: "POST",
        body: JSON.stringify({
          coverPhoto: post.coverPhoto,
          propertyName: post.propertyName,
          price: post.price,
          location: post.location,
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
