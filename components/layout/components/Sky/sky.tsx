import Image from 'next/image';
import styles from './sky.module.scss';
import rcaf100 from '@/public/images/rcaf_100.png'
import rcaf100_hover from '@/public/images/rcaf_100_hover.png'
import Link from 'next/link';
export function Sky() {
    return (

        <div className={`${styles.mainContainer} group`}>
            <Link href="/rcaf100" className=''>
                <div className='flex justify-center relative'>
                    <div className='absolute left-0 top-0'>
                        <div className={styles.stars}></div>
                        <div className={styles.stars2}></div>
                        <div className={styles.stars3}></div>
                        {/* <div className={styles.comet}></div> */}
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='flex items-center gap-3 border-b border-transparent group-hover:border-white transition duration-300'>
                            <p className='text-white font-bold text-[35px]'>RCAF </p>
                            <Image alt="Royal Canadian Air Force Centennial " src={rcaf100_hover} height={40} />
                            <p className='text-white font-bold text-[35px]'>Tributes</p>
                        </div>
                        <p className='
                        text-[#479dff] border-b border-[#479dff]  font-bold text-sm duration-300
                        group-hover:border-white group-hover:text-white
                        '>Click Here</p>
                    </div>
                </div>

            </Link>
        </div>

    )
}