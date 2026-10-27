# Klass8 tutor voice: Kokoro-82M (Apache-2.0) text-to-speech on CPU.
FROM python:3.11-slim
RUN apt-get update && apt-get install -y --no-install-recommends espeak-ng && rm -rf /var/lib/apt/lists/*
RUN pip install --no-cache-dir torch --index-url https://download.pytorch.org/whl/cpu
RUN pip install --no-cache-dir "kokoro>=0.9.4" soundfile fastapi "uvicorn[standard]"
RUN python -m spacy download en_core_web_sm
WORKDIR /app
COPY server.py ./
ENV HF_HOME=/models
EXPOSE 8880
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8880", "--workers", "1"]
