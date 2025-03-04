const GetImageUrl = (url: string | null | undefined): string => {
  return url?.length ? url : "/images.png";
};

export default GetImageUrl;
