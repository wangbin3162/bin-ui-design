export interface SkeletonProps {
  animation?: boolean
  count?: number
  rows?: number
  loading?: boolean
  throttle?: number
}

export interface SkeletonItemProps {
  variant?:
    | 'p'
    | 'text'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'text'
    | 'caption'
    | 'button'
    | 'image'
    | 'circle'
    | 'rect'
}
