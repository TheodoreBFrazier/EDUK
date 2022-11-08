import React from "react";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { motion, useAnimation } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { Card } from "@mui/material";

var cardStyle = {
	height: "auto",
	width: "360px",
	padding: "20px",
	boxshadow: "box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px",
};
const boxVariant = {
	visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
	hidden: { opacity: 0, scale: 0.5 },
};

function SingleResource({ resource }) {
	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			control.start("visible");
		} else {
			control.start("hidden");
		}
	}, [control, inView]);

	return (
		<motion.div
			ref={ref}
			variants={boxVariant}
			initial="hidden"
			animate={control}
			className="resource-card"
		>
			<Card style={cardStyle} variant="outlined">
				<Link to={`/resources/${resource.resource_id}`}>
					<h4> {resource.resource_name} </h4>
				</Link>
				<p> {resource.description} </p>
				<Link to={`/resources/${resource.resource_id}`}>
					<Button variant="text" size="small">
						View
					</Button>
				</Link>
			</Card>
		</motion.div>
	);
}

export default SingleResource;

//   return (
//     <motion.div
//       className="box"
//       ref={ref}
//       variants={boxVariant}
//       initial="hidden"
//       animate={control}
//     >
//       <h1>Box {num} </h1>
//     </motion.div>
//   );
// };
