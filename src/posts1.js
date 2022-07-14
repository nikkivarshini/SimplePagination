import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table border="3px">
        <thead>
            <tr>
                <th>flight number</th>
                <th>mission name</th>
                <th>launch year</th>
            </tr>
            
        </thead>
        <tbody>
            {
             posts.map((post,index) =>
            <tr key={index} >
            <td> {post.flight_number}</td>
            <td> {post.mission_name}</td>
         
            <td>{post.launch_year}</td>
            </tr>
        
        )}
        </tbody>
      
    </table>
  );
};

export default Posts;
