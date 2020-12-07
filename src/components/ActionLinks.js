import React from 'react'

export default function ActionLinks() {
    return (
        <div className="action-links">
            <div className="answer-actions">
            <a href="#">
                <svg width="24px" height="24px" viewBox="0 0 24 24"><g id="answer" transform="translate(2.500000, 3.500000)" stroke="blue" stroke-width="1.5" fill="none" fill-rule="evenodd"><g id="pen" transform="translate(9.000000, 9.000000) rotate(-315.000000) translate(-9.000000, -9.000000) translate(7.000000, -1.000000)"><path d="M2,8.8817842e-16 L2,8.8817842e-16 L2,8.8817842e-16 C3.1045695,6.85269983e-16 4,0.8954305 4,2 L4,16 L2.00256278,20 L0,16 L0,2 L0,2 C-1.35267774e-16,0.8954305 0.8954305,1.09108686e-15 2,8.8817842e-16 Z" id="pen_body" class="icon_svg-stroke" stroke="blue" stroke-linecap="round" stroke-linejoin="round"></path><polygon id="pen_tip" class="icon_svg-fill_as_stroke" fill="#666" transform="translate(2.000000, 18.750000) scale(1, -1) translate(-2.000000, -18.750000) " points="2 17.5 3.25 20 0.75 20"></polygon></g><path d="M12,16 L17,16 L17,11 M7,1 L2,1 L2,6" id="bg" class="icon_svg-stroke" stroke="#blue" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                <span>Answer</span>
            </a>
            <a href="#">
                <svg width="24px" height="24px" viewBox="0 0 24 24"><g stroke="none" fill="none" fill-rule="evenodd" stroke-linecap="round"><g id="follow" class="icon_svg-stroke" stroke="#666" stroke-width="1.5"><path d="M14.5,19 C14.5,13.3369229 11.1630771,10 5.5,10 M19.5,19 C19.5,10.1907689 14.3092311,5 5.5,5" id="lines"></path><circle id="circle" cx="7.5" cy="17" r="2" class="icon_svg-fill" fill="none"></circle></g></g></svg>
                <span>Follow</span>
            </a>
            <a href="#">
                <svg width="24px" height="24px" viewBox="0 0 24 24"><g id="cant_answer" stroke="none" fill="none" fill-rule="evenodd"><g id="pen" transform="translate(11.485281, 12.485281) rotate(-315.000000) translate(-11.485281, -12.485281) translate(9.485281, 2.485281)"><path d="M0,7.51471863 L2.22044605e-16,1.99994543 C8.67738547e-17,0.895375929 0.8954305,-5.45711382e-05 2,-5.45711382e-05 C3.1045695,-5.45711382e-05 4,0.895375929 4,1.99994543 L4,7.51471863 M4,12.5147186 L4,16 L2.00256278,20 L0,16 L0,12.5147186" id="Rectangle-5" class="icon_svg-stroke" stroke="#666" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path><polygon id="pen_tip" class="icon_svg-fill_as_stroke" fill="#666" transform="translate(2.000000, 18.750000) scale(1, -1) translate(-2.000000, -18.750000) " points="2 17.5 3.25 20 0.75 20"></polygon></g><path d="M4.63603897,5.63603897 L18.5,19.5" id="Line" class="icon_svg-stroke" stroke="#666" stroke-width="1.5" stroke-linecap="round"></path></g></svg>
                <span>Pass</span>
            </a>
            </div>
            <div className="answer-more">
                <a href="#">
                    <svg width="24px" height="24px" viewBox="0 0 24 24"><g id="downvote" class="icon_svg-stroke icon_svg-fill" stroke="#666" fill="none" stroke-width="1.5" fill-rule="evenodd" stroke-linejoin="round"><polygon transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) " points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"></polygon></g></svg>
                </a>
                <a href="#">
                    <svg width="24px" height="24px" viewBox="0 0 24 24"><g id="share" class="icon_svg-stroke" stroke="#666" fill="none" stroke-width="1.5" fill-rule="evenodd" stroke-linejoin="round"><path d="M12.0001053,2.99989467 L4.00010533,12.7776724 L9.33343867,12.7776724 C9.78266695,14.7041066 10.5048892,16.2782509 11.5001053,17.5001053 C12.4953215,18.7219597 13.9953215,19.8886264 16.0001053,21.0001053 C15.3415908,19.6668553 14.8428108,18.1668553 14.5037654,16.5001053 C14.16472,14.8333553 14.2190556,13.5925444 14.666772,12.7776724 L20.0001053,12.7776724 L12.0001053,2.99989467 Z" transform="translate(12.000105, 12.000000) rotate(90.000000) translate(-12.000105, -12.000000) "></path></g></svg>
                </a>
                <a href="#">
                    <svg width="24px" height="24px" viewBox="0 0 24 24"><g id="overflow" class="icon_svg-stroke" stroke-width="1.5" stroke="#666" fill="none" fill-rule="evenodd"><path d="M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z"></path></g></svg>
                </a>
            </div>
        </div>
    )
}
