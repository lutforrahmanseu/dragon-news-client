import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";
const NewsSummaryCard = ({ news }) => {
  const { title, total_view, rating, _id, image_url, author, details } = news;

  return (
    <Card className="mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between align-items-center">
          <Image
            roundedCircle
            className="me-3"
            src={author?.img}
            style={{ height: "60px" }}
          ></Image>
          <div>
            <p className="mb-0">{author?.name}</p>
            <p className="mb-0">{author?.published_date}</p>
          </div>
        </div>
        <div>
          <FaBookmark className="me-3"></FaBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <div>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 250) + "..."}
              <Link to={`/news/${_id}`}>Read More</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div>
          <FaStar className="text-warning"></FaStar>
          <span className="ms-2">{rating?.number}</span>
        </div>
        <div>
          <FaEye></FaEye>
          <span className="ms-2">{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
