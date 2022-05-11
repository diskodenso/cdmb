import React from "react";
import { useParams } from "react-router-dom";
import { Map, Marker } from "pigeon-maps";

const PostDetails = ({ posts }) => {
  const { id } = useParams();
  const selectedPost = posts.find((post) => post.sys.id === id);
  console.log(selectedPost);
  // console.log(location);
  return (
    <div>
      {selectedPost && (
        <div>
          <h2>{selectedPost.fields.title}</h2>
          <img
            src={selectedPost.fields.image.fields?.file.url}
            alt={selectedPost.sys.id}
            width="500"
            height="400"
          />
          <p>{selectedPost.fields.description}</p>
          <Map
            height={200}
            width={400}
            defaultCenter={[
              selectedPost.fields.location.lat,
              selectedPost.fields.location.lon,
            ]}
            defaultZoom={8}
          >
            <Marker
              width={30}
              anchor={[
                selectedPost.fields.location.lat,
                selectedPost.fields.location.lon,
              ]}
            />
          </Map>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
