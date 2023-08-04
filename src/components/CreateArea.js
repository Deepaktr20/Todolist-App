import { useState } from "react";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';

function CreateArea({onAdd}) {
  const [isExpanded, setExpanded] = useState(false);

  const [title, setTitle] = useState('');
  const [content,setContent]=useState('');

  const handleTitleChange=(event)=>{
    setTitle(event.target.value)
  }
  const handleContentChange=(event)=>{
    setContent(event.target.value);
  }

  const submitNote=(event)=>{
    event.preventDefault();
    onAdd(title,content);
    setTitle('');
    setContent('');
  }

  const expand=()=>{
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleTitleChange}
            value={title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleContentChange}
          value={content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;