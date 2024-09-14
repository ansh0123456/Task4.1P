import {
    CommentText,
    CommentMetadata,
    CommentGroup,
    CommentContent,
    CommentAvatar,
    CommentActions,
    CommentAction,
    CommentAuthor,
    FormTextArea,
    Comment,
    Form,
    Header,
  } from 'semantic-ui-react'
function commentitem()
{
    return(
        <Comment>
      <CommentAvatar src='https://semantic-ui.com/images/avatar/small/christian.jpg' />
      <CommentContent>
        <CommentAuthor as='a'>Ansh</CommentAuthor>
        <CommentMetadata>
          <div>Today at 5:42PM</div>
        </CommentMetadata>
        <CommentText>How Awsome!</CommentText>
        <CommentActions>
          <CommentAction>Reply</CommentAction>
        </CommentActions>
      </CommentContent>
    </Comment>
    
    
    )

}
export default commentitem