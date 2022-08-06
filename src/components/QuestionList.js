import QuestionItem from './QuestionItem'


function QuestionList({ qLists, onDeleteItem, onUpdateItem }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{qLists.map((qList) => <QuestionItem key={qList.id} question={qList} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem} />)
      }</ul>
    </section>
  );
}

export default QuestionList;
