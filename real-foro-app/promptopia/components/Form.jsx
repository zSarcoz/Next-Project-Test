import { motion } from "framer-motion";
import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2}}
        className="head_text text-left"
      >
        <span className="blue_gradient">{type} Post</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="desc text-left max-w-md"
      >
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 100, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1 }}
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <motion.span
            initial={{ opacity: 0, y: -50, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="font-satoshi font-semibold text-base text-gray-700"
          >
            Your AI Prompt
          </motion.span>

          <motion.textarea
            initial={{ opacity: 0, y: 20, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.8 }}
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your post here"
            required
            className="form_textarea "
          />
        </label>

        <label>
          <motion.span
            initial={{ opacity: 0, y: -50, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 2.1 }}
            className="font-satoshi font-semibold text-base text-gray-700"
          >
            Field of Prompt{" "}
            <span className="font-normal">
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </motion.span>
          <motion.input
            initial={{ opacity: 0, y: 20, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 2.3 }}
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#Tag"
            required
            className="form_input"
          />
        </label>

        <motion.div
          initial={{ opacity: 0, y: 10, x: -100, scale: 0 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          transition={{ delay: 2.8 }}
          className="flex-end mx-3 mb-5 gap-4"
        >
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <motion.button
            whileHover={{ y: -5 }}
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </motion.button>
        </motion.div>
      </motion.form>
    </section>
  );
};

export default Form;
