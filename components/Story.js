const Story = (story) => {
    return `
        <div class="story">
            <div>
                <span class="gray">${story.index || ""}</span>
                <span class="upvote">▲</span>
                <a href="${story.url}">${story.title}</a>
                <span>(${story.domain})</span>
            </div>
            <div>
                <div class="gray">
                    ${story.points} points by ${story.user} ${story.time_ago}
                    |
                    <a href="#/item?id=${story.id}">
                        ${story.comments_count} comments
                    </a>
                    |
                    <span class="favorite" data-story='${JSON.stringify(story).replace(/'/g, "&#39;")}'>
                        <img class="heart" src="https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-red-heart-icon-isolated-png-image_1726594.jpg">
                        ${story.isFavorite ? "Remove From Favorites" : "Add To Favorites" }
                    </span>
                </div>
            </div>
        </div>`;
};

export default Story;