import { motion } from "framer-motion";
import { fadeIn } from "./animation";

function Contact() {
    return (
        <motion.div variants={fadeIn} initial="initial" animate="final">
            <h1>Contact</h1>

            <div className="abhero">
                
            </div>
            <h3>Email</h3>

            <a href="mailto:angela.52911@gmail.com" target="_blank" rel="noreferrer">
                angela.52911@gmail.com
            </a>
        </motion.div>
    )
}

export default Contact