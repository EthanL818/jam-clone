export function Location() {
    return (
        <div className="md:w-[33%]">
            <h1 className="text-center text-[1.5rem] font-bold">Location</h1>
            <p>
                Jet Aircraft Museum
            </p>
            <p>
                2465 Aviation Lane, Unit 2
            </p>
            <p>
                London, Ontario
            </p>
            <p>
                Canada  N5V 3Z9
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.495409215494!2d-81.15768618464273!3d43.03100697914749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882e932f2a7ba5c9%3A0xf95ba4ce0ff2c498!2s2465%20Aviation%20Ln%2C%20London%2C%20ON%20N5V%203Z9!5e0!3m2!1sen!2sca!4v1570374135647!5m2!1sen!2sca"
                className="w-full min-h-[200px] border-0 my-2 rounded-md">
            </iframe>
        </div>
    )
}