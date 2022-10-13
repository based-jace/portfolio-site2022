import {motion, AnimatePresence} from "framer-motion";
import {useRouter} from "next/router";

export default function Transition({children}){
    const router = useRouter();

    const variants = {
        in: {
            y: "-200vh",
            transition: {
                type: "spring",
                duration: 0.5,
            }
        },
        out: {
            y: "200vh",
            transition: {
                type: "spring",
                duration: 0.5,
            }
        },
        animate: {
            y: 0,
            transition: {
                type: "spring",
                duration: 0.5,
            }
        }
    }

    // return <>{children}</>

    return <div><AnimatePresence
        initial={false}
        // exitBeforeEnter
    >
        <motion.div
            key={router.route}
            variants={variants}
            animate="animate"
            initial="in"
            exit="out"
            className="transition"
        >
            {children}
        </motion.div>
    </AnimatePresence></div>
}
