import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BLOGS } from './graphql/queries'; 

const BlogPage = () => {
  const { loading, error, data } = useQuery(GET_BLOGS); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const blogs = data.blogs; 
