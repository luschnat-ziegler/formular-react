import { useState } from 'react'
import styled from 'styled-components/macro'

export default function Tags({tagList, onAddTag, onRemoveTag}) {

    const [currentTag, setCurrentTag] = useState('')

    return <div>
        <h4>Personal Interests</h4>
        <input type="text" value={currentTag} onChange={handleChange} onKeyDown={handleAddTag}/>
        {tagList.map((tag,index)=> 
            (<TagDiv key={index}>
                {tag} 
                <DeleteButton type="button" id={index} onClick={handleRemoveTag}>X</DeleteButton>
            </TagDiv>)      
        )}
    </div>

    function handleChange(event) {
        setCurrentTag(event.target.value)
    }

    function handleAddTag(event) {
        if (event.key === 'Enter') {
            onAddTag(currentTag)
            setCurrentTag('')
            event.preventDefault()
        }
    }
    
    function handleRemoveTag(event) {
        onRemoveTag(Number(event.target.id))
    }

}

const TagDiv = styled.div`
    background-color: orange;
    border-radius: .3em;
    display: inline-block;
    margin-right: 1rem;
    margin-top: 1rem;
    padding: 1rem;
`

const DeleteButton = styled.button`
    background-color: orange;
    border: none;
    display: inline-block;
    padding-left: .5rem;
    font-size: 1rem;
`