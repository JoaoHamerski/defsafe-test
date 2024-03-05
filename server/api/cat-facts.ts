export default defineEventHandler(async (event) => {
  return $fetch("https://meowfacts.herokuapp.com?count=50");
});
