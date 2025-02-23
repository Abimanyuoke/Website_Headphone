import React from "react";
import Blog1 from "../../src/assets/image/blog1.jpg"
import Blog2 from "../../src/assets/image/blog2.jpg"
import Blog3 from "../../src/assets/image/blog3.jpg"
import Blog4 from "../../src/assets/image/blog4.jpg"
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const BlogData = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi repudiandae quas exercitationem blanditiis sit aliquid.",
        link: "#",
        img: Blog1,
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi repudiandae quas exercitationem blanditiis sit aliquid.",
        link: "#",
        img: Blog2,
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi repudiandae quas exercitationem blanditiis sit aliquid.",
        link: "#",
        img: Blog3,
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi repudiandae quas exercitationem blanditiis sit aliquid.",
        link: "#",
        img: Blog4,
    },
]


export const Blogs = () => {
    return (
        <section className="py-14">
            <div className="container">
                <h1 className="text-3xl font-bold text-center font-poppins pb-8">
                    Blogs
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {
                        BlogData.map((data) => {
                            return (
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: "black",
                                        zIndex: 999,
                                        followSpeed: 1.5,
                                        scale: 5,
                                        text: "read",
                                        textFontSize: "3px",
                                    }}>
                                    <div className="flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2">
                                        <img src={data.img} alt="image blog" />
                                        <div>
                                            <h1 className="text-xl font-bold line-clamp-2">{data.title}</h1>
                                            <p className="line-clamp-2">{data.desc}</p>
                                        </div>
                                    </div>
                                </UpdateFollower>
                            )
                        })
                    }
                </div>
            </div>
        </section >
    )
}