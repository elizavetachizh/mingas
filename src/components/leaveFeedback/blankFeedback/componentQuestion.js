export default function ComponentQuestion({
  options,
  question,
  selectedOption,
  onSelectOption,
  comment,
  onCommentChange,
}) {
  return (
    <tr>
      <td style={{ padding: '0 0.5rem' }}>{question}</td>
      {options.map((option, index) => (
        <td style={{ textAlign: 'center' }}>
          <label key={index}>
            <input
              type="radio"
              name={question}
              value={option}
              checked={selectedOption === option}
              onChange={() => onSelectOption(option)}
            />
          </label>
        </td>
      ))}
      <td style={{ textAlign: 'center' }}>
        <label>
          <textarea
            placeholder={'Комментарии (причины оценок «не вполне», «нет»), пожелания Заказчика'}
            value={comment}
            onChange={(e) => onCommentChange(e.target.value)}
          />
        </label>
      </td>
    </tr>
  );
}
