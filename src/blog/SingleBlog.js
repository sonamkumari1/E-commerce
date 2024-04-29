import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Tags from "../shop/Tags"
import PopularPost from "../shop/PopularPost"

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

function SingleBlog() {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();

  const result = blog.filter((b) => b.id === Number(id));

  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog/ Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="post-item style-2">
                      <div className="post-inner">
                        {result.map((item) => (
                          <div key={item.id}>
                            <div className="post-thumb">
                              <img src={item.imgUrl} alt="" className="w-100" />
                            </div>
                            <div className="post-content">
                              <h3>{item.title}</h3>
                              <div className="meta-post">
                                <ul className="lab-ul">
                                  {item.metaList.map((val, j) => (
                                    <li key={j}>
                                      <i className={val.iconName}></i>
                                      {val.text}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <p>
                                Most of us have childhood memories of gaping at
                                our elders in wonder when they narrated to us
                                the amusing fables of Aesop, the picturesque
                                fairy tales, the funny anecdotes, the lyrical
                                short stories, and so on. Classic bedtime
                                stories take us into the world of imagination.
                                These short stories are identified with brevity
                                and compact narrative. Vedantu brings forth some
                                of the most amazing kids' stories with colourful
                                illustrations to make the most of the leisure
                                reading of kids.
                              </p>

                              <blockquote>
                                <p>
                                  These short stories are identified with
                                  brevity and compact narrative. Vedantu brings
                                  forth some of the most amazing kids' stories
                                  with colourful illustrations to make the most
                                  of the leisure reading of kids.
                                </p>
                                <cite>
                                  <a href="#">...Story Line</a>
                                </cite>
                              </blockquote>

                              <p>
                                Most of us have childhood memories of gaping at
                                our elders in wonder when they narrated to us
                                the amusing fables of Aesop, the picturesque
                                fairy tales, the funny anecdotes, the lyrical
                                short stories, and so on. Classic bedtime
                                stories take us into the world of imagination.
                                These short stories are identified with brevity
                                and compact narrative. Vedantu brings forth some
                                of the most amazing kids' stories with colourful
                                illustrations to make the most of the leisure
                                reading of kids.
                              </p>

                              <img src=" /assets/images/blog/01.jpg" />

                              <p>
                                Most of us have childhood memories of gaping at
                                our elders in wonder when they narrated to us
                                the amusing fables of Aesop, the picturesque
                                fairy tales, the funny anecdotes, the lyrical
                                short stories, and so on. Classic bedtime
                                stories take us into the world of imagination.
                                These short stories are identified with brevity
                                and compact narrative. Vedantu brings forth some
                                of the most amazing kids' stories with colourful
                                illustrations to make the most of the leisure
                                reading of kids.
                              </p>

                              <img src=" /assets/images/blog/02.jpg" />

                            
                              <div className="tags-section">
                                <ul className="tags lab-ul">
                                  <li>
                                    <a href="#">Agency</a>
                                  </li>
                                  <li>
                                    <a href="#">Business</a>
                                  </li>
                                  <li>
                                    <a href="#">Personal</a>
                                  </li>
                                </ul>

                                <ul className="lab-ul social-icons">
                                  {socialList.map((val, i) => (
                                    <li key={i}>
                                      <a href="#" className={val.className}>
                                        <i className={val.iconName}></i>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                          <i className="icofont-double-left"></i>Previous Blog
                        </a>

                        <a href="" className="title">
                          our elders in wonder when they narrated to us
                        </a>
                      </div>

                      <div className="right">
                        <a href="#" className="prev">
                        Previous Blog<i className="icofont-double-right"></i>
                        </a>

                        <a href="" className="title">
                          our elders in wonder when they narrated to us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
