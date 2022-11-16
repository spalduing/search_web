const handleTitleChange = (e: any, setTitle: any): void => {
  if (e.key == 'Enter') {
    setTitle(e.target.value);
  }
};

export default handleTitleChange;
