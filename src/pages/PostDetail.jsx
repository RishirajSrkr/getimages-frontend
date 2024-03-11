import React from 'react'
import PostAuthor from '../component/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'
function PostDetail() {
  return (
    <section className='post-detail'>
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/erf/edit`} className="btn sm primary" >Edit</Link>
            <Link to={`/posts/erf/delete`} className="btn sm danger" >Delete</Link>
          </div>
        </div>
        <h1>This is a post title!</h1>
        <div className='post-detail__thumbnail'>
          <img src={Thumbnail} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, officia ad quod quisquam doloremque eaque iure commodi fugit culpa quidem, doloribus inventore reiciendis beatae enim totam pariatur odit quaerat! Fugiat itaque vel molestiae consequuntur blanditiis veritatis alias architecto explicabo libero.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, consequuntur id. Incidunt ex architecto, possimus voluptate corrupti excepturi dolor minus amet qui, magnam accusamus eaque aspernatur vero iusto? Veniam veritatis iure aut, quaerat sunt eveniet ratione similique temporibus, mollitia nostrum, totam ex sequi in molestiae repudiandae aliquid magnam doloribus? At ipsam quia enim non cumque!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam vel blanditiis magni saepe maxime ea rerum vitae quis excepturi, omnis quod in nobis inventore, dignissimos porro eveniet autem laudantium delectus culpa magnam, quidem officiis assumenda? Incidunt sed quam obcaecati. Voluptas ex, laborum repudiandae temporibus sit non doloremque maxime nihil possimus dignissimos laboriosam tempore ad voluptatum hic fugit perspiciatis culpa dicta atque iure voluptatem earum dolores quibusdam. Corporis libero consequuntur dicta assumenda qui doloribus quos? Doloribus numquam aut aperiam, deserunt similique dolore? Nesciunt eaque maxime voluptates error molestias dolorum quos vero, hic, recusandae, magnam harum molestiae alias dicta odio dolor ducimus.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores velit laboriosam doloribus vitae distinctio harum quae ducimus corporis fugiat. Quos dicta repellat debitis eveniet veniam similique cupiditate praesentium. Consequuntur inventore, eligendi magni illo libero a animi, voluptatem porro cupiditate est cum veniam in cumque consequatur reprehenderit ipsum rem architecto illum, ad id vel aspernatur. Quos, nulla dolorum commodi, laborum provident eius illo optio nam saepe quas explicabo odit minus totam excepturi magni, nihil deleniti dolores maiores temporibus! Natus reiciendis et ad magni itaque! Temporibus quis eos dolore rerum totam qui pariatur quidem possimus! Officia reiciendis ut eos? Minus ipsam, ab, consequuntur eveniet voluptatibus soluta voluptates maiores natus eius cupiditate eos animi facere ipsa distinctio accusantium officia deleniti sapiente harum deserunt iste quibusdam libero? Ea, quidem. Quos, obcaecati optio vitae sunt modi tempore facere. Quidem quibusdam nisi quia ducimus iusto sunt eaque nesciunt earum. Laborum officia reiciendis temporibus! Dolorum sequi, molestias, et doloremque sunt rem itaque corrupti a tempore, eveniet in aliquid quas animi! Alias, ad eius recusandae accusamus soluta iure veritatis quos, quisquam facilis est praesentium veniam consequuntur? Libero magnam unde quasi? Dolorum adipisci facere fugiat deleniti. Dolore corrupti provident consequuntur, doloribus doloremque, sed quasi rerum esse delectus sint non?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime modi quo neque suscipit iste optio aliquam quod quibusdam placeat similique.</p>
      </div>
    </section>
  )
}

export default PostDetail