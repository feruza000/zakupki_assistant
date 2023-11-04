"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata } = blog;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >

        <div className="grid grid-cols-12 gap-3">
            <Link href={`/blog/`} className="relative block aspect-[348/220] col-span-3">
                <Image src={mainImage} alt={title} fill />
            </Link>

            <div className="col-span-9">
                <h6 className="inline-block font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
                    <Link href={`/blog/blog-details`}>
                        {`${title.slice(0, 40)}...`}
                    </Link>
                </h6>
            </div>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
