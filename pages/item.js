import Story from "../components/Story.js";
import Comment from "../components/Comment.js";
import view from "../utils/view.js";
import baseURL from "../utils/baseURL.js";

const Item = async () => {
    let story = null;
    let hasComments = false;
    let hasError = false;

    try {
        story = await getStory();
        hasComments = story.comments.length > 0;
    } catch(e) {
        hasError = true;
        console.log(e);
    }

    if(hasError) {
        view.innerHTML = `<div class="error">Error fetching story!</div>`;
    }

    view.innerHTML = `
        <div>
            ${Story(story)}
        </div>
        <hr />
        ${hasComments ? story.comments.map(comment => Comment(comment)).join("") : "No comments"}
        `;
};

const getStory = async () => {
    const storyId = window.location.hash.split("?id=")[1];
    const response = await fetch(`${baseURL}/item/${storyId}`);
    const story = await response.json();

    return story;
};

export default Item;