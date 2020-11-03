import { useState } from 'react'
import styled from 'styled-components/macro'

export default function Tags({tagList, onAddTag, onRemoveTag}) {

    const [currentTag, setCurrentTag] = useState('')

    return <div>
        <h4>Personal Interests</h4>
        <TagWrapper>
            {tagList.map((tag,index)=> 
                (<TagDiv key={index}>
                    {tag} 
                    <DeleteButton type="button" id={index} onClick={handleRemoveTag}>X</DeleteButton>
                </TagDiv>)      
            )}
            <input type="text" value={currentTag} onChange={handleChange} onKeyDown={handleAddTag}/>
        </TagWrapper>
    </div>

    function handleChange(event) {
        setCurrentTag(event.target.value)
    }

    function handleAddTag(event) {
        if (event.key === 'Enter') {
            onAddTag(currentTag)
            setCurrentTag('')
            event.preventDefault()
        } else if (event.key === 'Backspace') {
            onRemoveTag(tagList.length -1)
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
    padding: 1rem;
`

const DeleteButton = styled.button`
    background-color: orange;
    border: none;
    display: inline-block;
    padding-left: .5rem;
    font-size: 1rem;
`

const TagWrapper = styled.div`
    display: flex;
    border: 1px solid gray;
    width: 380px;
    padding: .5rem .5rem;
    flex-flow: row wrap;

    input {
        border: none;
        height: 3rem;
        font-size: 1.5rem;
        width: 100px;

        &:focus {
            outline: none;
        }
    }
`