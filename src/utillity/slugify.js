export const slugify = (text) => {
    return text.toLowerCase().replace(/\+/g, 'plus').replace(/ /g, '-').replace(/[^\w-]+/g, '');
  };
  