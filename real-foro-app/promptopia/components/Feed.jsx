"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";
import { motion } from "framer-motion";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <>
      {data ? (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 prompt_layout"
        >
          {data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleTagClick={handleTagClick}
            />
          ))}
        </motion.div>
      ) : (
        <div>
          <h1>Any Post</h1>
        </div>
      )}
    </>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i");
    return allPosts.filter(
      (item) =>
        regex.test(item?.creator?.username) ||
        regex.test(item?.tag) ||
        regex.test(item?.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target?.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <motion.form
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="relative w-full flex-center"
      >
        <input
          type="text"
          placeholder="Search for a Tag or a Username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </motion.form>

      {/* All Prompts */}
      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
