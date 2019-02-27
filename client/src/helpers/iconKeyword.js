const iconKeyword = (icon) => {
  switch(icon) {
    case "clear-day":
      return "sun";
    case "clear-night":
      return "moon";
    case "rain":
      return "cloud-rain";
    case "snow":
      return "snowflake";
    case "wind":
      return "wind";
    case "cloudy":
      return "cloud";
    case "partly-cloudy-day":
      return "cloud-sun";
    case "partly-cloudy-night":
      return "cloud-moon";
    default:
      return "question";
  }
};

export default iconKeyword;
