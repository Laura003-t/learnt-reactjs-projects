import { useDispatch, useSelector } from "react-redux";
import { handleAddToDo, handleEditBlog, handleInputChange, setCurrentEditedBlogId } from "../store/slices/blogSlice";

function AddNewBlog() {

    const { blog } = useSelector(state => state);
    const dispatch = useDispatch();
    const { currentEditedBlogId } = blog;

    function onChangeInput(event) {
        dispatch(handleInputChange({
            [event.target.name]: event.target.value,
        })
        )
    }

    function handleToDoSubmit(event) {
        event.preventDefault();
        if(currentEditedBlogId !== null) dispatch(handleEditBlog())
        else dispatch(handleAddToDo());
        
        if(currentEditedBlogId !== null) dispatch(setCurrentEditedBlogId({
            currentBlogId: null,
        }));
        dispatch(handleInputChange({
            description: '',
            title: '',
        }));
    }


    return (
        <div>
            <form onSubmit={handleToDoSubmit}>
                <div>
                    <label>Enter Blog Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter Blog Title"
                        id="title"
                        onChange={onChangeInput}
                        value={blog?.formData.title}
                    />
                </div>
                <div>
                    <label>Enter Blog Decsription</label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter Blog Description"
                        id="description"
                        onChange={onChangeInput}
                        value={blog?.formData.description}
                    />
                </div>
                <button type="submit">
                    {
                        blog?.currentEditedBlogId ? 'Edit Blog' : 'Add New Blog'
                    }
                </button>
            </form>
        </div>
    );
}

export default AddNewBlog;