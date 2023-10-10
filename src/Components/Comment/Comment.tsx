import { useEffect, useState } from 'react';
import styles from './Comment.module.scss';
import CommentFrame from 'Components/CommentFrame/CommentFrame';
import { db } from 'api/firebase';
import { setDoc, addDoc, collection, doc, getDocs } from 'firebase/firestore';
import { query, where, orderBy } from 'firebase/firestore';
export interface ICommentDataType {
  id: string;
  writer: string;
  date: number;
  comment: string;
  password: string;
}
function Comment() {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [commentData, setCommentData] = useState<ICommentDataType[]>([]);
  function resetForm() {
    setComment('');
    setName('');
    setPassword('');
  }
  useEffect(() => {
    getCommentData();
  }, []);
  async function getCommentData() {
    let list: ICommentDataType[] = [];
    const commentsCollection = collection(db, 'comments');
    const data = query(
      commentsCollection,
      where('isDeleted', '==', false),
      orderBy('date', 'desc')
    );
    const querySnapshot = await getDocs(data);
    querySnapshot.forEach((doc: any) => {
      list.push({ id: doc.id, ...doc.data() });
    });
    setCommentData([...list]);
  }
  function checkValidate() {
    let checkRes = true;
    if (!comment) {
      checkRes = false;
      alert('댓글을 입력해주세요.');
    } else if (!name) {
      checkRes = false;
      alert('이름을 입력해주세요.');
    } else if (!password) {
      checkRes = false;
      alert('비밀번호를 입력해주세요.');
    }
    return checkRes;
  }
  async function commentSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!checkValidate()) return;
    const commentCollection = collection(db, 'comments');
    try {
      await addDoc(commentCollection, {
        comment,
        date: new Date().getTime(),
        isDeleted: false,
        password,
        writer: name,
      });
      alert('댓글이 등록되었습니다.');
      resetForm();
      getCommentData();
    } catch (err) {
      alert('에러가 발생했습니다. 다시 시도해주세요.');
    }
  }
  return (
    <div className={styles.container}>
      <form className={styles.commentForm} onSubmit={commentSubmit}>
        <div className={styles.comment}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.currentTarget.value)}
          ></textarea>
          <button>POST</button>
        </div>
        <div className={styles.commentOption}>
          <div className={styles.writer}>
            <span>NAME : </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div className={styles.password}>
            <span>PASSWORD : </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
        </div>
      </form>
      <ul className={styles.commentList}>
        {commentData.map((comment, idx) => (
          <li
            key={comment.id}
            style={{ animationDelay: `${idx * 0.1 + 0.5}s` }}
          >
            <CommentFrame data={comment} getCommentData={getCommentData} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Comment;
