import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useTitle from "./../../../Hooks/useTitle";
const News = () => {
  const news = useLoaderData();
  useTitle("News Details");
  const { image_url, title, details, category_id } = news;

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">All News</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
