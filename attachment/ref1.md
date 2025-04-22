% latex text of my CV

% !TEX TS-program = xelatex
% !TEX encoding = UTF-8 Unicode
% !Mode:: "TeX:UTF-8"

\documentclass{resume}
\usepackage{zh_CN-Adobefonts_external} % Simplified Chinese Support using external fonts (./fonts/zh_CN-Adobe/)
%\usepackage{zh_CN-Adobefonts_internal} % Simplified Chinese Support using system fonts
\usepackage{linespacing_fix} % disable extra space before next section
\usepackage{cite}
\usepackage{hyperref} % For clickable links

\begin{document}
\pagenumbering{gobble} % suppress displaying page number

\name{Guanyu Jiang}

\basicInfo{
  \email{django040805@zju.edu.cn} \textperiodcentered\ 
  \phone{(+86) 150-132-30805} \textperiodcentered\ 
  \faHome\ \url{https://djangojungle.github.io/}
  }

\section{\faGraduationCap\ Education Background}
\datedsubsection{\textbf{Zhejiang University}, Zhejiang, Hangzhou}{2022.09 -- Present}
\textit{Undergraduate}\ \ \ \ \ \ \ \ \ \ \ Majoring in Computer Science and Technology, \ GPA: 3.63/4.0
\datedsubsection{\textbf{The Affiliated High School of SCNU}, Guangdong, Guangzhou}{2019.09 -- 2022.06}
\textit{High school student}\ \ \ \ Outstanding Graduate

\section{\faFlask\ Research Experience}

\datedsubsection{\textbf{Research Intern @ TMLR Group, HKBU}}{2024.11 -- Present}
\begin{onehalfspacing}
\textbf{Advisor}: \textit{Zhanke Zhou \& Xiao Feng}, PhD students of \textit{Prof. Bo Han}
\begin{itemize}
  \item Conduct research on LLM(Large Language Model) reasoning, focusing on \textbf{reinforcement learning in the post-training phase of large language models}.
  \item Aim to design advanced RL algorithms to enhance model reasoning capabilities.
\end{itemize}
\end{onehalfspacing}

\datedsubsection{\textbf{Research Intern @ SuDIS Lab, ZJU}}{2024.05 -- 2025.03}
\begin{onehalfspacing}
\textbf{Advisor}: \textit{Prof. Huan Li}, Professor at College of Computer Science, Zhejiang University
\begin{itemize}
  \item Investigate Table LLM as the primary research direction.
  \item Propose a novel table task type and develop a large model based table discovery algorithm on this task, achieving state-of-the-art results compared to previous methods.
  \item Construct a demo to showcase the solution, with \textbf{the paper under submission and code repository to be released later}.
\end{itemize}
\end{onehalfspacing}

\section{\faCode\ Project Experience}

\datedsubsection{\textbf{Structure-Guided Image Generation @ HunyuanDiT, Tencent}}{2024.07 -- 2024.10}
\begin{onehalfspacing}
\textbf{Advisor}: \textit{Zhimin Li}, Senior Algorithm Researcher at Tencent; \textit{Xinlu Lai}, Algorithm Researcher at Tencent
\begin{itemize}
  \item Improve the model and training pipeline for Tencent HunyuanDiT's structured information-guided image generation sub-direction.
  \item Introduce a VLM(Vision Language Model) annotation + ControlNet training solution to enhance performance in handling structured information.
  \item Receive the \textbf{Tencent Outstanding Student Award} by passing the final review.
\end{itemize}
\end{onehalfspacing}

\datedsubsection{\textbf{Cloud-on-Cloud Platform @ School of Computing Workshop, NUS}}{2024.06 -- 2024.07}
\begin{onehalfspacing}
\textbf{Advisor}: \textit{Prof. Richard Ma Tianbai}, Professor at National University of Singapore
\begin{itemize}
  \item Aiming at workshop issue: Big Data and Cloud Computing Applications in Real Life.
  \item Pioneered a creative meteorological community platform, architected on Kubernetes with Kafka-driven real-time data streaming and advanced time-series modeling for precise analytics and Interaction.
  \item \textbf{Rank \#2} in the NUS SoC Workshop, Cloud Computing \& Big Data track.
\end{itemize}
\end{onehalfspacing}


\section{\faStar\ Awards}
\datedline{Tencent Outstanding Student, "Xiniu Niao" Project at Tencent}{2024.10}
\datedline{Second Place, Cloud Computing and Big Data track at NUS SoC Workshop}{2024.07}
\datedline{Silver Award, Zhejiang International "Internet+" Innovation and Entrepreneurship Competition}{2023.09}
\datedline{Zhejiang University Excellent Student in Innovation and Entrepreneurship}{2023.06}
\datedline{Zhejiang University Excellent Student in External Communication}{2023.06}

\section{\faLanguage\ Languages}
\begin{itemize}[parsep=0.5ex]
  \item \textbf{Mandarin}: Native Speaker
  \item \textbf{Cantonese}: Conversational
  \item \textbf{English}: IELTS 7.0 (Listening: 7.5, Reading: 8.5, Writing: 6.0, Speaking: 6.0)
\end{itemize}

\section{\faCogs\ Skills}
\begin{itemize}[parsep=0.5ex]
  \item \textbf{Programming Languages}: C/C++, Python, Java, JavaScript
  \item \textbf{Machine Learning Frameworks}: PyTorch, HuggingFace, LangChain, vLLM
  \item \textbf{Tools}: Kubernetes, Git, LaTeX, Jupyter, AWS
\end{itemize}

\section{\faUsers\ Services}
\begin{itemize}[parsep=0.5ex]
  \item Person in charge, Youth League Committee of Yunfeng School in Zhejiang University
  \item Member, "Qizhen Wenxue" Talent Researcher Program in Zhejiang University
  \item Volunteer, 19th Asian Games in Hangzhou
\end{itemize}

\end{document}
