interface IMovieMutation {
  name: string;
}

interface IMovie {
  id: string;
  name: string;
}

interface IJoke {
  categories?: [];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export { IMovie, IMovieMutation, IJoke };
