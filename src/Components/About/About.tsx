import styles from './About.module.scss';
import skillData from '../../data/skills.json';
import triedData from '../../data/tries.json';
function About() {
  return (
    <div className={styles.container}>
      <article className={styles.introduce}>
        <h3>INTRODUCE</h3>
        <p>
          안녕하세요.
          <br />
          저는 FrontEnd 개발 1년차 이주연입니다.
          <br />
          사용자들이 제가 만든 웹사이트를 이용한다는 것에 흥미를 느껴
          <br />
          FrontEnd로 직군을 정하였었고, 현재는 React를 이용한 개발을 위주로
          진행하고 있습니다.
          <div style={{ marginTop: '20px' }}></div>
          클린 코드 작성, 재사용성이 높은 컴포넌트 제작 등을 목표로 개발을 하고
          있으며,
          <br />
          현재는 알고리즘, 테스트 코드 작성에 대해 공부하고 있습니다.
          <br />
          보다 나은 개발자가 되기 위해 꾸준히 노력하도록 하겠습니다.
          <br />
          읽어주셔서 감사합니다.
        </p>
      </article>
      <article className={styles.skills}>
        <h3>SKILLS</h3>
        <ul>
          {skillData.map((skill: { name: string; icon: string }) => (
            <li key={skill.name}>
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </article>
      <article className={styles.try}>
        <h3>JUST TRIED!</h3>
        <ul>
          {triedData.map((skill: { name: string; icon: string }) => (
            <li key={skill.name}>
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
export default About;
