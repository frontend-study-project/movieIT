import styled from './mypage.table.module.css';

const MypageTable = ({ columns, data, control }) => (
  <table className={styled.table}>
    <tbody>
      {columns.map(({ key, label, component }) => (
        <tr key={key}>
          <th>{label}</th>
          <td>{component(data?.[key], control)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default MypageTable;
