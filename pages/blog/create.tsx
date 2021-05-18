import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useTheme } from '@emotion/react'
import Login from '../../components/Login'
import Router from 'next/router'

const Draft: React.FC = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [slug, setSlug] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { title, slug, content }
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/blog/drafts')
    } catch (error) {
      console.error(error)
    }
  }

  function generateSlug(str: string) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeiiiioooouuuunc------";

    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
  }

  let slugUrl = generateSlug(title);

  const slugField = useRef(null)

  useEffect(() => {
    let interval = setInterval(() => {
      if (slugField.current) {
        setSlug(slugField.current.value)
        //do the same for all autofilled fields
        clearInterval(interval)
      }
    }, 100)
  })  
  
  const theme : any = useTheme()


  return (
    <>
      <nav css={{
        display: 'flex',
        flexDirection: 'row',
        color: theme.colors.footer,
        fontSize: '12px'
      }}>
        <Link href="/">Home</Link>
        <span css={{ margin: '0 10px 0 10px' }}>/</span>
        <Link href="/">Blog</Link>
        <span css={{ margin: '0 10px 0 10px' }}>/</span>
        <p>New Post</p>
      </nav>
      <Login />
      <div>
        <form onSubmit={submitData}>
          <h1>New Post (draft)</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <input
            placeholder="URL Slug"
            type="text"
            value={slugUrl}
            disabled={true}
          />
          <input
            ref={slugField}
            onInput={() => setSlug(slugUrl)}
            placeholder={slugUrl}
            type="text"
            value={slugUrl}
            hidden={true}
          />
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
          />
          <input className="buttonCompact" disabled={!content || !title || !slug} type="submit" value="Save Draft" />
          <a className="buttonCompact" href="#" css={{ padding: '.4rem 0.8rem' }} onClick={() => Router.push('/blog')}>
            Delete
          </a>
        </form>
      </div>
    </>
  )
}

export default Draft