import { ICommentDataType } from 'Components/Comment/Comment';
import styles from './CommentFrame.module.scss';
import { useEffect, useState } from 'react';
import {
  setDoc,
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from 'api/firebase';

interface IPropsType {
  data: ICommentDataType;
  getCommentData: () => void;
}
function CommentFrame({ data, getCommentData }: IPropsType) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [comment, setComment] = useState(data.comment);
  const [password, setPassword] = useState('');

  function deleteComment() {
    let password = window.prompt(
      '댓글을 삭제하시려면 비밀번호를 입력해주세요.'
    );
    if (password !== data.password) {
      alert('비밀번호가 올바르지 않습니다.');
      return;
    }
    (async () => {
      try {
        const commentCollection = doc(db, 'comments', data.id);
        await updateDoc(commentCollection, {
          isDeleted: true,
        });
        await getCommentData();
        setEditMode(false);
      } catch (err) {
        alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
      }
    })();
  }
  async function updateComment() {
    if (!password || password !== data.password) {
      alert('비밀번호를 확인해주세요.');
      return;
    }

    try {
      const commentCollection = doc(db, 'comments', data.id);
      await updateDoc(commentCollection, {
        comment,
      });
      await getCommentData();
      setEditMode(false);
    } catch (err) {
      alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  }

  useEffect(() => {
    if (editMode) setComment(data.comment);
  }, [editMode]);
  return !editMode ? (
    <article className={styles.container}>
      <div className={styles.commentDetailWrap}>
        <span className={styles.writer}>{data.writer}</span>
        <p className={styles.comment}>{data.comment}</p>
        <span className={styles.date}>
          {(() => {
            let date = new Date(data.date + 1000 * 60 * 60 * 9).toISOString();
            return `${date.slice(0, 10).replace(/-/g, '.')} ${date.slice(
              11,
              16
            )}`;
          })()}
        </span>
      </div>
      <div
        className={styles.menu}
        tabIndex={1}
        onBlur={() => setMenuOpen(false)}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {menuOpen && (
          <ul className={styles.commentSetBtn}>
            <li onClick={() => setEditMode(true)}>
              <span>수정</span>
            </li>
            <li onClick={deleteComment}>
              <span>삭제</span>
            </li>
          </ul>
        )}
      </div>
    </article>
  ) : (
    <article className={styles.editContainer}>
      <span className={styles.writer}>{data.writer}</span>
      <div className={styles.commentInputWrap}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.currentTarget.value)}
        ></textarea>
      </div>
      <ul className={styles.editControlBtns}>
        <li className={styles.password}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="password"
          />
        </li>
        <li onClick={() => setEditMode(false)}>
          <span>취소</span>
        </li>
        <li onClick={updateComment}>
          <span>수정</span>
        </li>
      </ul>
    </article>
  );
}
export default CommentFrame;
