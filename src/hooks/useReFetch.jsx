import React, { useState } from "react";

const useReFetch = () => {
  const [refetch, setRefetch] = useState(false);

  return { refetch, setRefetch };
};

export default useReFetch;
