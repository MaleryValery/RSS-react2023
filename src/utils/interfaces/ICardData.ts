interface ICardData {
  id: string;
  type: string;
  attributes: {
    slug: string;
    alias_names: [];
    animagus: null;
    blood_status: null;
    boggart: null;
    born: string;
    died: string;
    eye_color: null;
    family_members: string[];
    gender: string;
    hair_color: null;
    height: null;
    house: null;
    image: string;
    jobs: string[];
    marital_status: null;
    name: string;
    nationality: string;
    patronus: null;
    romances: [];
    skin_color: null;
    species: string;
    titles: [];
    wands: [];
    weight: null;
    wiki: string;
  };
  links: {
    self: string;
  };
}

export default ICardData;
