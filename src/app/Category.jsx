"use client";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

   const { isAuthenticated, user, login, logout } = useKindeAuth();

  return (
    <div className="my-14 z-10">
      <h1 className="font-bold text-3xl text-teal-800 text-center">
        Popular Quiz Categories
      </h1>
      <div className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-10 w-10/12 mx-auto">
        {Categories?.map((category) => (
          <Link
            key={category.id}
            // href={`/Categoryquiz/${category.id}`}
            href={`${isAuthenticated ? `/Categoryquiz/${category.id}` : "/api/auth/login"}`}
            className="border border-blue-900 p-6 bg-white text-lg shadow-lg  flex items-center gap-5 rounded-lg"
          >
            <img src={category.image} alt="" className="w-10" />
            {category.name}
          </Link>
        ))}     
      </div>
    </div>
  );
};

export default Category;
