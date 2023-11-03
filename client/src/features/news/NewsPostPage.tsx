import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import type { RootState } from '../../redux/store';
import './style/style.css';

function PostPage(): JSX.Element {
  const { postId } = useParams();
  const navigate = useNavigate();

  const posts = useSelector((store: RootState) => store.news.posts);

  const post = posts.find((post) => postsId && post.id === +postId);

  const error = <h1>Такой статьи нет</h1>;

  const content = (
    <div className="post-page">
      <img className="post-page__img" src={post?.img} alt="post" />
      <h3>{post?.text}</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab sed quos quidem. Eaque
        maxime voluptas praesentium totam. Quidem, ut perspiciatis unde aliquid assumenda optio
        repellendus porro cumque repellat nihil repudiandae deleniti impedit reiciendis maiores quos
        explicabo fuga quas tempore atque corrupti? Unde, saepe perferendis. Inventore vitae rerum
        minima odio error voluptas libero distinctio eos quo, modi quibusdam, numquam delectus
        recusandae, nam culpa fuga aliquid repellat eligendi labore a corrupti ullam dolor nobis
        necessitatibus? Quo exercitationem officia harum fugit necessitatibus corrupti quidem
        nesciunt repellat magnam laborum sed est, earum dignissimos maxime ab ipsam provident ut
        ullam ipsa quae deleniti error!
      </p>
      <button onClick={() => navigate(-1)} type="button">
        Назад к списку статей
      </button>
    </div>
  );

  return <div className="post-page__container">{!post ? error : content}</div>;
}

export default PostPage;
