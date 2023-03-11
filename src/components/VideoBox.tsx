export function VideoBox() {
  return (
    <div className="max-w-lg cursor-pointer">
      <div className="relative">
        <img
          src="https://kp-blog.s3.amazonaws.com/wp-content/uploads/2019/02/20102611/aplicativode-editar-video-7-dicas-para-criar-videos-de-sucesso.jpg"
          alt="video"
        />
        <div className="absolute text-xs font-bold bg-black bg-opacity-80 bottom-1 right-1 py-[1px] px-1 rounded-sm">
          05:02
        </div>
      </div>
      <div className="flex gap-3 py-3">
        <div>
          <div className="w-9 h-9">
            <img
              src="https://yt3.googleusercontent.com/1_i7Xq_jSuIJ3ZfG9-K_yWnrxoGSfpSq4XIMUcM80pj8-b2HJQoZmS6rSWMTQPBzrqn9_uMOIQ=s900-c-k-c0x00ffffff-no-rj"
              alt="channel"
              className="rounded-full"
            />
          </div>
        </div>
        <div>
          <div className="font-bold text-sm mb-1">
            A MELHOR FERRAMENTA DE BANCO DE DADOS EM 2023
          </div>
          <div className="text-xs">DevPleno</div>
          <div className="text-xs">93 visualizações - há 8 horas</div>
        </div>
      </div>
    </div>
  );
}
