const Introducing = (props) => {
  return (
    <div className='outer'>
      <p style={{ fontFamily: 'Product Sans' }}>{props.content}</p>
      <style jsx>
        {`
          .outer {
            background-color: ${props.color};
            border: 1px solid black;
            border-radius: 94px;
            font-size: 1rem;
            font-weight: bold;
            line-height: 0.03rem;
            height: fit-content;
            width: fit-content;
            padding: 0 0.7rem;
            margin-bottom: 0.7rem;
          }

          @media (max-width: 760px) {
            .outer {
              margin: auto;
              margin-bottom: 0.7rem;
              font-size: 0.6rem;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Introducing
