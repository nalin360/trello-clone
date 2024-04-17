import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function Board() {
  return (
    <div>
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography varia nt="h5" color="blue-gray" className="mb-2">
            Title
          </Typography>
          <Typography>
            this is event management card
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link
            to="/body" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Read More
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Board;
