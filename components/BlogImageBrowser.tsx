import Image from 'next/image';
import { css } from '@emotion/react';
import CloseIcon from '@/components/CloseIcon';
import { convertUrlToMarkdown } from '@/utils/convertUrlToMarkdown';
import { deleteImage } from '@/lib/cloudinary';
import { useState } from 'react';
import LoadingTriangle from '@/components/LoadingTriangle';

type BlogImageBrowserProps = {
  images: string[];
  setShowModal: (showModal: boolean) => void;
  handleInsertImage: (url: string) => void;
  loading: boolean;
};

const IMAGE_SIZE = 100;

const styleModal = css({
  height: '100%',
  width: '100%',
  position: 'fixed',
  top: 48,
  left: 0,
  zIndex: 5,
  backdropFilter: 'blur(8px)',
  '.loading': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
  },
  '.modalContent': {
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
    border: '3px solid var(--color-accent)',
    borderRadius: 5,
    position: 'relative',
    width: '90vw',
    maxWidth: 702,
    margin: '4rem auto',
    backgroundColor: 'var(--color-bg)',
    padding: '1.5rem 1rem .75rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.close': {
    position: 'absolute',
    top: -7,
    left: -7,
  },
  '.imgGrid': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
  },
  '.imgContainer': {
    display: 'flex',
    flexDirection: 'column',
    '.imgThumb': {
      position: 'relative',
      overflow: 'hidden',
      img: {
        border: '2px solid var(--color-accent)',
        maxHeight: IMAGE_SIZE,
        maxWidth: IMAGE_SIZE,
        objectFit: 'cover',
        zIndex: -1,
      },
      '&:hover::after': {
        height: IMAGE_SIZE,
        width: IMAGE_SIZE,
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'var(--color-dark)',
        cursor: 'pointer',
        opacity: 0.3,
        zIndex: 1,
      },
    },
    '.imgDetails': {
      display: 'flex',
      alignItems: 'flex-start',
    },
    '.imgName': {
      fontSize: 11,
      maxWidth: IMAGE_SIZE - 20,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  '.delete': {
    marginRight: '.33rem',
  },
});

const BlogImageBrowser = ({
  images,
  setShowModal,
  handleInsertImage,
  loading,
}: BlogImageBrowserProps) => {
  const [deletedImage, setDeletedImage] = useState('');

  const handleSelectImage = (url: string) => {
    handleInsertImage(convertUrlToMarkdown(url));
    setShowModal(false);
  };

  const handleImageDelete = async (public_id: string) => {
    try {
      await deleteImage(public_id);
      setDeletedImage(public_id);
    } catch (error) {
      console.error(error);
    }
  };

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div css={styleModal}>
      {loading ? (
        <div className="loading">
          <LoadingTriangle color="var(--color-text)" />
        </div>
      ) : (
        <div className="modalContent">
          <button className="close" onClick={() => setShowModal(false)}>
            <CloseIcon size={18} />
          </button>
          <div className="imgGrid">
            {[...images].reverse().map((image, index) => {
              const public_id = `Blog/${image
                ?.split('/')
                .pop()
                ?.split('.')
                .slice(0, -1)
                .join('.')}`;
              const imageName =
                image?.split('/').pop()?.split('_').slice(0, -1).join(' ') ??
                'Blog Image';
              if (public_id === deletedImage) {
                return null;
              }
              return (
                <div key={index} className="imgContainer">
                  <div
                    className="imgThumb"
                    onClick={() => handleSelectImage(image)}
                  >
                    <Image
                      src={image}
                      width={IMAGE_SIZE}
                      height={IMAGE_SIZE}
                      alt={imageName}
                      aria-label={imageName}
                    />
                  </div>
                  <div className="imgDetails">
                    <button
                      className="delete"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowDeleteConfirm(!showDeleteConfirm);
                        setSelectedImage(public_id);
                      }}
                    >
                      <CloseIcon size={12} color="var(--color-gray)" />
                    </button>
                    {showDeleteConfirm && selectedImage === public_id ? (
                      <div>
                        •{' '}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleImageDelete(public_id);
                          }}
                        >
                          delete
                        </button>
                      </div>
                    ) : (
                      <button
                        className="imgName"
                        onClick={() => handleSelectImage(image)}
                      >
                        {imageName}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogImageBrowser;
