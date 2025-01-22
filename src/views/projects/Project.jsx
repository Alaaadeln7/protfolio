import { Chrome, Github } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Project(props) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={props.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        {props.description.length > 100 ? (
          showFullDescription ? (
            <>
              <p>{props.description}</p>
              <button
                className="btn mt-2"
                onClick={() => setShowFullDescription(false)}
              >
                Show Less
              </button>
            </>
          ) : (
            <>
              <p>{props.description.substring(0, 100) + "..."}</p>
              <button
                className="btn mt-2"
                onClick={() => setShowFullDescription(true)}
              >
                Show More
              </button>
            </>
          )
        ) : (
          <p>{props.description}</p>
        )}
        <div className="card-actions justify-end">
          <Link
            target="_blank"
            to={props.linkes.live}
            className="btn btn-primary"
          >
            <Chrome className="text-white" />
          </Link>
          <Link
            target="_blank"
            to={props.linkes.repo}
            className="btn btn-primary"
          >
            <Github className="text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
