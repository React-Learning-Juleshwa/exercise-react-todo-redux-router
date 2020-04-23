const initState = {
    posts: [
        {
            body: "#1 quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto",
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            userId: 1
        },
        {
            body: "#2 est rerum tempore vitae↵sequi sint nihil reprehenderit dolor beatae ea dolores neque↵fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis↵qui aperiam non debitis possimus qui neque nisi nulla",
            id: 2,
            title: "qui est esse",
            userId: 1
        },
        {
            body: "#3 et iusto sed quo iure↵voluptatem occaecati omnis eligendi aut ad↵voluptatem doloribus vel accusantium quis pariatur↵molestiae porro eius odio et labore et velit aut",
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            userId: 1
        },
        {
            body: "#4 ullam et saepe reiciendis voluptatem adipisci↵sit amet autem assumenda provident rerum culpa↵quis hic commodi nesciunt rem tenetur doloremque ipsam iure↵quis sunt voluptatem rerum illo velit",
            id: 4,
            title: "eum et est occaecati",
            userId: 1
        },
        {
            body: "#5 repudiandae veniam quaerat sunt sed↵alias aut fugiat sit autem sed est↵voluptatem omnis possimus esse voluptatibus quis↵est aut tenetur dolor neque",
            id: 5,
            title: "nesciunt quas odio",
            userId: 1
        }
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => action.id !== post.id);

        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;